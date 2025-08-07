#!/bin/bash

# Paths
FRONTEND_PATH="/home/sat24/Documents/project/CodexHub/client"
BACKEND_PATH="/home/sat24/Documents/project/CodexHub/server"

# Function to check internet connectivity
check_internet() {
  echo "Checking internet connectivity..."
  if ping -q -c 1 -W 1 google.com >/dev/null; then
    echo "✅ Internet connection detected."
  else
    echo "❌ No internet connection. Exiting..."
    exit 1
  fi
}

# Start both frontend and backend
start_servers() {
  echo "Starting backend..."
  cd "$BACKEND_PATH" || exit
  npm run dev &
  BACKEND_PID=$!

  echo "Starting frontend..."
  cd "$FRONTEND_PATH" || exit
  npm run dev &
  FRONTEND_PID=$!

  echo "🚀 Both frontend and backend are running."
  echo "➡️  Press Ctrl+C to stop both."

  # Wait for Ctrl+C
  trap stop_servers SIGINT
  wait
}

# Function to stop both processes
stop_servers() {
  echo ""
  echo "🛑 Stopping frontend and backend..."
  kill $FRONTEND_PID 2>/dev/null
  kill $BACKEND_PID 2>/dev/null
  echo "✅ Both stopped."
  exit 0
}

# Execution
check_internet
start_servers

