output "instance_ip" {
    value       = aws_instance.quizApp-instance.public_ip

  description = "The public IP address of the QuizApp instance"
}

output "instance_id" {
  value       = aws_instance.quizApp-instance.id
  description = "The instance ID of the QuizApp instance"
}

output "security_group_id" {
  value       = aws_security_group.quizApp_sg.id
  description = "The ID of the security group for the QuizApp instance"
}

output "private_ip" {
  value       = aws_instance.quizApp-instance.private_ip
  description = "The private IP address of the QuizApp instance"
}