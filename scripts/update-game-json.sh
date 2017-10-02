API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com}"
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
