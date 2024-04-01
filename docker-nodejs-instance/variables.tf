variable "region" {
    description = "AWS region"
    default =  "us-east-1"
}

variable "instance_type" {
    description = "EC2 instance type"
    default = "t2.micro"
}

variable "key_name" {
  description = "Key name for the EC2 instance"
}

variable "server_name" {
  description = "Name for the server"
  default = "quizApp-instance"
}

variable "tags" {
  description = "Tags for AWS resources"
  type        = string
  default = "quizApp-Instance"
}


variable "quizApp_instance_ports" {
  description = "Ports for Docker instance"
  type        = list(number)
  default = [22, 80, 8080]
}