cd /home/ec2-user/Travel-Blog/src
npm start
pm2 start npm --name "Travel-Blog" -- start
pm2 startup
pm2 save
pm2 restart all