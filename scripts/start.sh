# Initialize background service file
if [ ! -f /etc/systemd/system/websites.service ]; then
  sudo cp websites.service /etc/systemd/system/
fi

# Start as background service
sudo systemctl daemon-reload
sudo systemctl enable websites
sudo systemctl start websites
