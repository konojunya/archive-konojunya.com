#!/bin/sh -ex

ssh konojunya@$IP -p $PORT
cd $DIR
git pull origin master
pm2 reload konojunya.com