# CDK setup 

## amazon linux 2023  

### Install Node js LTS version  (i am using 22.12.0)

[click_here](https://nodejs.org/en/download/package-manager)

### Installing nodejs 22.12.0

```
# installs nvm (Node Version Manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash

# download and install Node.js (you may need to restart the terminal)

source ~/.bashrc
nvm install 22

# verifies the right Node.js version is in the environment

[ec2-user@ip-172-31-20-248 ~]$ node -v
v22.12.0

# verifies the right npm version is in the environment

[ec2-user@ip-172-31-20-248 ~]$ npm -v
10.9.0

```

### Install cdk using npm 

```
npm -g install typescript

changed 1 package in 838ms

===>
npm install -g aws-cdk


```

### verify cdk version 

```
cdk --version 
2.173.2 (build f8e6207)

```

### Now configure aws configure with access and secret key 

```
aws configure 

```


## Creating First CDk project using typescript 

```
 cdk init app --language typescript
Applying project template app for typescript
# Welcome to your CDK TypeScript project

This is a blank project for CDK development with TypeScript.

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `npx cdk deploy`  deploy this stack to your default AWS account/region
* `npx cdk diff`    compare deployed stack with current state
* `npx cdk synth`   emits the synthesized CloudFormation template

Initializing a new git repository...
hint: Using 'master' as the name for the initial branch. This default branch name
hint: is subject to change. To configure the initial branch name to use in all
hint: of your new repositories, which will suppress this warning, call:
hint: 
hint:   git config --global init.defaultBranch <name>
hint: 
hint: Names commonly chosen instead of 'master' are 'main', 'trunk' and
hint: 'development'. The just-created branch can be renamed via this command:
hint: 
hint:   git branch -m <name>
Executing npm install...
npm warn deprecated inflight@1.0.6: This module is not supported, and leaks memory. Do not use it. Check out lru-cache if you want a good and tested way to coalesce async requests by a key value, which is much more comprehensive and powerful.
npm warn deprecated glob@7.2.3: Glob versions prior to v9 are no longer supported
✅ All done!

```

## Understanding cdk init 

:- It initialize a project with some template like app rest given in example 

```
cdk init --list
Available templates:
* app: Template for a CDK Application
   └─ cdk init app --language=[csharp|fsharp|go|java|javascript|python|typescript]
* lib: Template for a CDK Construct Library
   └─ cdk init lib --language=typescript
* sample-app: Example CDK Application with some constructs
   └─ cdk init sample-app --language=[csharp|fsharp|go|java|javascript|python|typescript]

```

### A much better view 

# AWS CDK `cdk init` Options

The `cdk init` command is used to initialize an AWS CDK project. Below is a summary of available templates and options you can use with this command.

## **Templates and Options**

| **Template**   | **Command**                                 | **Description**                                      |
|----------------|---------------------------------------------|------------------------------------------------------|
| **App**        | `cdk init app --language typescript`        | Initializes a basic CDK app.                        |
| **Sample App** | `cdk init sample-app --language python`     | Includes additional example code for learning.      |
| **Lib**        | `cdk init lib --language java`              | Creates a CDK construct library project.            |
| **Generate Only** | `cdk init app --language javascript --generate-only` | Generates project structure without dependencies. |
| **List Templates** | `cdk init --list`                      | Lists all available templates.                      |


### Check below the Tree structure of this project 

```
my-cdk-project/
├── bin/
│   └── my-cdk-project.ts  # Entry point for the app
├── lib/
│   └── my-cdk-project-stack.ts  # Define your CDK stack here
├── test/
│   └── my-cdk-project.test.ts  # Unit tests for your stack
├── cdk.json                # CDK configuration file
├── package.json            # Node.js project file
├── README.md               # Project readme
├── tsconfig.json           # TypeScript configuration

```

# TO Create Infra below is the step by step guide 

### CDK init (see above for more understanding)

### CDK synth 

- **:- cdk synth (or cdk synthesize)
- **:- Purpose: Synthesizes your CDK app into an AWS CloudFormation template.
- **:- What It Does: Generates a JSON/YAML CloudFormation template based on your code.
- **:- When to Use: To review the generated CloudFormation template before deployment

# =========>> &&&&$$$$$$$ <<==========

# AWS CDK Essential Commands

## **1. `cdk bootstrap`**
- **Purpose**: Prepares your AWS environment for deploying CDK stacks.
- **What It Does**: Creates necessary resources (like an S3 bucket for storing assets) in your AWS account and region.
- **When to Use**: Before deploying your first stack.
- **Example**:
  ```bash
  cdk bootstrap aws://ACCOUNT_ID/REGION
  ```
- **Global Bootstrap** (for multiple accounts/regions):
  ```bash
  cdk bootstrap --all
  ```

---

## **2. `cdk synth` (or `cdk synthesize`)**
- **Purpose**: Synthesizes your CDK app into an AWS CloudFormation template.
- **What It Does**: Generates a JSON/YAML CloudFormation template based on your code.
- **When to Use**: To review the generated CloudFormation template before deployment.
- **Example**:
  ```bash
  cdk synth
  ```
  View output:
  ```bash
  cat cdk.out/MyStack.template.json
  ```

---

## **3. `cdk deploy`**
- **Purpose**: Deploys your CDK stack to your AWS account.
- **What It Does**: Translates your infrastructure code into AWS CloudFormation and deploys it.
- **When to Use**: When you’re ready to provision resources in AWS.
- **Example**:
  ```bash
  cdk deploy
  ```
- **Deploy Specific Stack**:
  ```bash
  cdk deploy MyStack
  ```

---

## **4. `cdk diff`**
- **Purpose**: Compares your CDK app’s current state with what’s deployed in AWS.
- **What It Does**: Shows the difference between your code and the deployed resources.
- **When to Use**: Before deploying changes to review what will be updated.
- **Example**:
  ```bash
  cdk diff
  ```

---

## **5. `cdk destroy`**
- **Purpose**: Deletes the deployed stack from your AWS account.
- **What It Does**: Removes all resources created by the stack.
- **When to Use**: When you no longer need the resources.
- **Example**:
  ```bash
  cdk destroy
  ```
- **Destroy Specific Stack**:
  ```bash
  cdk destroy MyStack
  ```

---

## **6. `cdk list` (or `cdk ls`)**
- **Purpose**: Lists all stacks in your CDK app.
- **What It Does**: Displays the names of the stacks defined in your project.
- **When to Use**: To identify stack names for deployment or destruction.
- **Example**:
  ```bash
  cdk list
  ```

---

## **7. `cdk doctor`**
- **Purpose**: Diagnoses issues with your CDK environment.
- **What It Does**: Provides information about your environment, versions, and configurations.
- **When to Use**: If you face issues with CDK commands.
- **Example**:
  ```bash
  cdk doctor
  ```

---

## **8. `cdk context`**
- **Purpose**: Manages cached context values in your CDK project.
- **What It Does**: Lists, retrieves, or resets context values (e.g., VPC IDs).
- **When to Use**: To refresh or view context values cached by the CDK.
- **Example**:
  List context:
  ```bash
  cdk context
  ```
  Clear cached context:
  ```bash
  cdk context --clear
  ```

---

## **9. `cdk init`**
- **Purpose**: Initializes a new CDK project (you already used this command).
- **Example**:
  ```bash
  cdk init app --language typescript
  ```

---

## **10. `cdk metadata`**
- **Purpose**: Displays metadata associated with your stack.
- **What It Does**: Shows information such as tool versions and assets used.
- **When to Use**: To debug or understand the metadata of your stacks.
- **Example**:
  ```bash
  cdk metadata MyStack
  ```

---

## **11. `cdk upgrade`**
- **Purpose**: Upgrades the CDK CLI to the latest version.
- **When to Use**: To keep your CDK CLI updated.
- **Example**:
  ```bash
  npm install -g aws-cdk
  ```

---

## **12. `cdk help`**
- **Purpose**: Displays detailed information about CDK commands.
- **When to Use**: Anytime you need quick help.
- **Example**:
  ```bash
  cdk help
  ```

---

## **Command Workflow for a Typical CDK Project**

1. **Bootstrap your environment (once per account/region):**
   ```bash
   cdk bootstrap
   ```
2. **Synthesize the stack to review the generated CloudFormation template:**
   ```bash
   cdk synth
   ```
3. **Deploy your stack:**
   ```bash
   cdk deploy
   ```
4. **Check differences before updating the stack:**
   ```bash
   cdk diff
   ```
5. **Destroy the stack when no longer needed:**
   ```bash
   cdk destroy
   ```







