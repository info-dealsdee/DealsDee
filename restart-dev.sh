#!/bin/bash

# Auto-restart development server script
# This script monitors and automatically fixes Internal Server Errors

echo "🔄 Starting Dealsdee development server with auto-recovery..."

# Function to clean and restart
restart_server() {
    echo "🧹 Cleaning Next.js cache and temporary files..."
    rm -rf .next/
    rm -rf node_modules/.cache/
    
    echo "🚀 Starting development server..."
    npm run dev
}

# Initial start
restart_server