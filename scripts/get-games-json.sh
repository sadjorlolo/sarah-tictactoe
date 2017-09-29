# API="${API_ORIGIN:-http://httpbin.org}"
# URL_PATH="/delete?id=$ID"
API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request GET \
  --header "Authorization: Token token=$TOKEN" \


echo

# ID=900 TOKEN=BAhJIiUwMTdhNTMyZDc2NDQ0NDBmMDE0MjZkZDVhMDhhNDgzNAY6BkVG--a2e67561fa06995397d9b5d7f8ee8122cad25f54 sh scripts/get-games-json.sh
