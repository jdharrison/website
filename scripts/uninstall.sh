# Start as background service
sudo systemctl stop websites

# Initialize background service file
if [ -f /etc/systemd/system/websites.service ]; then
  sudo rm /etc/systemd/system/websites.service
fi

sudo systemctl daemon-reload
