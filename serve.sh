#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
echo "Serving link-code-forge at http://localhost:8080"
echo "  Root:     http://localhost:8080/"
echo "  Product:  http://localhost:8080/spotStapler/"
echo "  Terms:    http://localhost:8080/spotStapler/term"
echo "  Privacy:  http://localhost:8080/spotStapler/privacy"
python3 -m http.server 8080
