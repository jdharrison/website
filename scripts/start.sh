# Make sure node dependencies are update to date
npm update --prefix /opt/websites

# Initialize background service file
if [ ! -f /etc/systemd/system/websites.service ]; then
  sudo cp /opt/websites/scripts/websites.service /etc/systemd/system/
fi

# Start as background service
sudo systemctl daemon-reload
sudo systemctl enable websites
sudo systemctl start websites
