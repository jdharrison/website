# Initialize background service file
if [ ! -f /etc/systemd/system/websites.service ]; then
  sudo cp .process/websites.service /etc/systemd/system/
fi

# Start as background service
sudo systemctl start websites
sudo systemctl enable websites
