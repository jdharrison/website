# Stop background service
sudo systemctl stop websites

# Remove services file
if [ -f /etc/systemd/system/websites.service ]; then
  sudo rm /etc/systemd/system/websites.service
fi

# Update systemd of removal
sudo systemctl daemon-reload
