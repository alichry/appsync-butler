import { expect } from 'chai';
import { Template } from 'aws-cdk-lib/assertions';
import { ParsedUnitResolverInfo } from '@appsync-butler/core';
import { loadSst } from './utils.js';

const options = {
    valid: {
        structure: { root: 'test/cases/valid/vtl' },
        variables: { message: 'ciao' },
    },
    invalidUnitDs: {
        structure: { root: 'test/cases/invalidUnitDs/vtl' },
        variables: { message: 'ciao' },
    },
    invalidFunctionDs: {
        structure: { root: 'test/cases/invalidFunctionDs/vtl' },
    }
};

describe('Test SST loading', function () {
    it('Should load all resolvers', function () {
        const { dummyStack } = loadSst(options.valid);

        const template = Template.fromStack(dummyStack);
        template.resourceCountIs('AWS::AppSync::Resolver', 4);
    });

    it('Should load custom datasource resolver', function () {
        const { loader, api, dummyStack } = loadSst(options.valid);
        
        expect(loader.builder.resolvers.Field).to.exist;
        const resolver = loader.builder.resolvers.Field?.customDs;
        expect(resolver).to.exist;
        expect(resolver?.resolverType).to.equals('Unit');
        expect((<ParsedUnitResolverInfo>resolver).dataSource).to.equals('test');
        expect(api.getResolver('Field customDs')).to.exist;

        const template = Template.fromStack(dummyStack);
        template.hasResourceProperties('AWS::AppSync::Resolver', {
            ApiId: dummyStack.resolve(api.apiId),
            TypeName: 'Field',
            FieldName: 'customDs',
            Kind: 'UNIT',
            DataSourceName: "test",
            RequestMappingTemplate: "## Hello\n## AppSync Butler: bound data source is test\ncustomDsUnit Unit resolver request mapping template\nciao",
            ResponseMappingTemplate: "customDsUnit Unit resolver response mapping template"
        });
    });

    it('Should load default datasource resolver', function () {
        const { loader, api, dummyStack } = loadSst(options.valid);
        
        expect(loader.builder.resolvers.Field).to.exist;
        const resolver = loader.builder.resolvers.Field?.defaultDs;
        expect(resolver).to.exist;
        expect(resolver?.resolverType).to.equals('Unit');
        expect((<ParsedUnitResolverInfo>resolver).dataSource).to.not.exist;
        expect(api.getResolver('Field defaultDs')).to.exist;

        const template = Template.fromStack(dummyStack);
        template.hasResourceProperties('AWS::AppSync::Resolver', {
            ApiId: dummyStack.resolve(api.apiId),
            TypeName: 'Field',
            FieldName: 'defaultDs',
            Kind: 'UNIT',
            DataSourceName: "myTable",
            RequestMappingTemplate: "defaultDsUnit Unit resolver request mapping template\nciao",
            ResponseMappingTemplate: "defaultDsUnit Unit resolver response mapping template"
        });
    });

    it('Should load none datasource resolver', function () {
        const { loader, api, dummyStack } = loadSst(options.valid);

        expect(loader.builder.resolvers.Field).to.exist;
        const resolver = loader.builder.resolvers.Field?.noneDs;
        expect(resolver).to.exist;
        expect(resolver?.resolverType).to.equals('Unit');
        expect((<ParsedUnitResolverInfo>resolver).dataSource).to.equals('none')
        expect(api.getResolver('Field noneDs')).to.not.exist; // 'none' ds resolvers are not added to SST Appsync API, only to CDK AppSync

        const template = Template.fromStack(dummyStack);
        template.resourceCountIs('AWS::AppSync::DataSource', 3);
        template.hasResourceProperties('AWS::AppSync::DataSource', {
            ApiId: dummyStack.resolve(api.apiId),
            Name: 'none',
            Type: 'NONE'
        });
        template.hasResourceProperties('AWS::AppSync::Resolver', {
            ApiId: dummyStack.resolve(api.apiId),
            TypeName: 'Field',
            FieldName: 'noneDs',
            Kind: 'UNIT',
            DataSourceName: "none",
            RequestMappingTemplate: "## Hello\n## AppSync Butler: bound data source is none\nnoneDsUnit Unit resolver request mapping template\nciao",
            ResponseMappingTemplate: "noneDsUnit Unit resolver response mapping template"
        });
    });

    it('Should load pipeline resolver', function () {
        const { loader, api, dummyStack } = loadSst(options.valid);
        
        expect(loader.builder.resolvers.Field).to.exist;
        const resolver = loader.builder.resolvers.Field?.defaultDs;
        expect(resolver).to.exist;
        expect(resolver?.resolverType).to.equals('Unit');
        expect((<ParsedUnitResolverInfo>resolver).dataSource).to.not.exist;
        expect(api.getResolver('Field pipeline')).to.exist;

        const template = Template.fromStack(dummyStack);
        template.hasResourceProperties('AWS::AppSync::Resolver', {
            ApiId: dummyStack.resolve(api.apiId),
            TypeName: 'Field',
            FieldName: 'pipeline',
            Kind: 'PIPELINE',
            PipelineConfig: {
                Functions: [
                    dummyStack.resolve(loader.functions.CustomDs?.functionId),
                    dummyStack.resolve(loader.functions.DefaultDs?.functionId),
                    dummyStack.resolve(loader.functions.NoneDs?.functionId),
                ]
            },
            RequestMappingTemplate: "Pipeline resolver before mapping template\nciao",
            ResponseMappingTemplate: "Pipeline resolver after mapping template\nciao"
        });
    });

    it('Should throw an error for invalid data source resolver', function () {
        expect(() => loadSst(options.invalidUnitDs)).to.throw(/data source 'nods' was not found/i);
    });

    it('Should throw an error for invalid function resolver', function () {
        expect(() => loadSst(options.invalidFunctionDs)).to.throw(/data source 'invalidDs' was not found/i);
    });
});
