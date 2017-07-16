#!/bin/sh -ex

ssh konojunya@153.126.171.5 -p 9733
cd /var/www/html/konojunya.com
git pull origin master
pm2 reload konojunya.com