aws/credentials:
	aws configure set region us-west-2
	aws configure set aws_access_key_id $$AWS_ACCESS_KEY_ID
	aws configure set aws_secret_access_key $$AWS_SECRET_ACCESS_KEY

aws/deploy:
	aws s3 sync public/ s3://konojunya.com/ --delete --acl public-read
