# QuizApp AWS Infrastructure Setup

This project automates the setup of the necessary infrastructure for the QuizApp, a React-based web application, on AWS using Terraform. The infrastructure includes an EC2 instance running on Amazon Linux 2023 AMI. The `userdata.sh` script is utilized to install critical components such as Docker and Node.js on this instance, ensuring the QuizApp's dependencies are met. Security group configurations allow the application to be accessible on the required ports, maintaining the application's security and accessibility.

## Features

- **Automated Infrastructure Setup**: Leverages Terraform for the provisioning of AWS resources, ensuring a repeatable and consistent environment.
- **Dynamic Environment**: Uses `userdata.sh` to dynamically set up the environment, installing Docker, Node.js, and other dependencies.
- **Security**: Configures security group settings to restrict access to necessary ports, enhancing the application's security posture.

## Prerequisites

Before proceeding with this project, make sure you have the following prerequisites set up:

- **AWS CLI**: Installed and configured for access to your AWS account. [AWS CLI Installation Guide](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-install.html)
- **Terraform**: Installed on your machine for infrastructure as code management. [Terraform Installation Guide](https://learn.hashicorp.com/tutorials/terraform/install-cli)
- **An AWS Account**: With appropriate permissions to create EC2 instances, security groups, and other necessary resources.

## Installation

### Step 1: Configure AWS CLI

Start by configuring the AWS CLI with your credentials:

```bash
aws configure
```

# Initialize Terraform
```bash
terraform init
```

# Review and Apply the Terraform Plan
```bash
terraform plan
```
Apply the plan to start the provisioning of your AWS resources:
```bash
terraform apply
```

# Verify the Setup
**Once the Terraform scripts have been executed, verify the setup by checking the EC2 dashboard in your AWS Console. Ensure that the instance is running and the security groups are correctly configured.**

# Customization
- EC2 Instance Size: Modify the instance_type variable in your Terraform script to adjust the compute resources available to your QuizApp.
- Security Group Settings: Update the aws_security_group resource in your Terraform script to change which ports are open to the internet.

# Additional Information
**This project setup is intended for development and testing purposes. Ensure you follow best practices for production deployments, such as using secure secret management, configuring more stringent security group rules, and monitoring your AWS resources.**

