API="${API_ORIGIN:-http://httpbin.org}"
URL_PATH="/post"
# API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
# URL_PATH="/sign-up"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Content-Type: application/json" \
  --data '{
    "credentials": {
      "email": "'"${EMAIL}"'",
      "password": "'"${PASSWORD}"'",
      "password-confirmation":"'"${PASSWORD}"'"
    }
  }'

  # In terminal - $ EMAIL='sarah' PASSWORD='sarah' sh scripts/sign-up-json.sh

echo