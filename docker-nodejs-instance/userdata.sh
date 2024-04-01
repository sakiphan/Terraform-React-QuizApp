#!/bin/bash
dnf update -y
curl -sL https://rpm.nodesource.com/setup_21.x | sudo bash -
sudo yum install -y nodejs
dnf install docker -y
systemctl start docker
systemctl enable docker
usermod -a -G docker ec2-user