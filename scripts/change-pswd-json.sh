
# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/patch?id=${ID}"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/change-password/${ID}"

curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "passwords": {
      "old": "'"${OLD_PASSWORD}"'",
      "new": "'"${NEW_PASSWORD}"'"
    }
  }'

# ID=900 OLD_PASSWORD=sarah NEW_PASSWORD=sarahj TOKEN=BAhJIiVjODhlYjNhOTJkMTVjNjhlYWFjN2I2NzdmYzdhNWY2YgY6BkVG--1428c76c606b96b28e4709e47017fa1ee99d5b96 sh scripts/change-pswd-json.sh

echo
