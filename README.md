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

### Deploy lambda function
```
node-lambda deploy
```
## Used technologies

* Node.js
* AWS Lambda