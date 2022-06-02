# AppSync Butler CLI

CLI to install AppSync Butler and setup the directory structure.

## Usage

```txt
$ npx appsync-butler --help
Usage: appsync-butler [options] [command]

Bootstrap or manage your appsync buttler application

Options:
  -V, --version                             output the version number
  -h, --help                                display help for command

Commands:
  bootstrap [options] [-- TOOLKIT_ARGS...]  Bootstrap an CDK/SST application coupled with AppSync Butler
  help [command]                            display help for command
```
```txt
$ npx appsync-butler bootstrap --help
Usage: appsync-butler bootstrap [options] [-- TOOLKIT_ARGS...]

Bootstrap an CDK/SST application coupled with AppSync Butler

Arguments:
  -- TOOLKIT_ARGS        Arguments to pass for the underlying toolkit init command. Make sure to pass the args
                         after -- E.g. -t cdk -- --language=typescript Please do not pass anything here
                         related to the target destination directory, doing so would result in undefined
                         behavior. This can be used to specify the CDK language option or the SST template
                         name.

Options:
  -t, --toolkit <tk>     Toolkit to install (choices: "cdk", "sst", "none")
  -d, --directory <dir>  Directory to setup the application in
  -h, --help             display help for command
```


