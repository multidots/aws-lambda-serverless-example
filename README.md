# Serverless-Aws-Lambda
An addition example of AWS Lambda in Serverless architecture

## How to start

### Install, configure and set path for aws cli

Aws: [http://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html](http://docs.aws.amazon.com/cli/latest/userguide/awscli-install-windows.html)

Configuration:[http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html](http://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

### install dependencies

```
 npm install -g node-lambda
```
### Run node-lambda setup

```
 node-lambda setup
```

**Event.json Data (Request Parameters)**
```
{
  "value1": "5",
  "value2": "3"
}
```

### Run lambda function in local
```
node-lambda run
```

**Example response:**
```json
Success:
  {  
    "result":8
  }
```
### Update .env file with your aws credentials 
update .env: [http://docs.aws.amazon.com/lambda/latest/dg/tutorial-env_cli.html](http://docs.aws.amazon.com/lambda/latest/dg/tutorial-env_cli.html)

```
AWS_ENVIRONMENT=development
AWS_ACCESS_KEY_ID= //aws access key 
AWS_SECRET_ACCESS_KEY= //aws secret key 
AWS_PROFILE=
AWS_SESSION_TOKEN=
AWS_ROLE_ARN= //aws role arn 
AWS_REGION=us-west-2 // aws selected region
AWS_FUNCTION_NAME=addition // name of lambda function
AWS_HANDLER=index.handler
AWS_MEMORY_SIZE=512 
AWS_TIMEOUT=300 // set timeout eg: after 300 second it will timeout request
AWS_DESCRIPTION=addition of two value // description 
AWS_RUNTIME=nodejs6.10
AWS_VPC_SUBNETS=
AWS_VPC_SECURITY_GROUPS=
AWS_TRACING_CONFIG=
EXCLUDE_GLOBS="event.json"
PACKAGE_DIRECTORY=build

```

### Deploy lambda function
```
node-lambda deploy
```
## Used technologies

* Node.js
* AWS Lambda
