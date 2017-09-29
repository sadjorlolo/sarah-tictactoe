API="${API_ORIGIN:-http://tic-tac-toe.wdibos.com}"
URL_PATH="/games/${ID}"
curl "${API}${URL_PATH}" \
  --include \
  --request PATCH \
  --header "Content-type: application/json" \
  --header "Authorization: Token token=$TOKEN" \
  --data '{
    "game": {
      "cell": {
        "index" : "'"${INDEX}"'",
        "value" : "'"${VALUE}"'"
      }
    }
  }'

echo

# ID=12158 INDEX=7 VALUE='X' TOKEN='BAhJIiU4NDllMGYzOTdhYzY0ZjljZDM4OTBmOWM0MTMzNDdkYwY6BkVG--d15d72f857f2be44d9219736bb49ba28a7bc1143' sh scripts/update-game-json.sh
