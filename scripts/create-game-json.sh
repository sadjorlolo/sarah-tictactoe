
API="${API_ORIGIN:-https://aqueous-atoll-85096.herokuapp.com}"
URL_PATH="/games"

curl "${API}${URL_PATH}" \
  --include \
  --request POST \
  --header "Authorization: Token token=$TOKEN" \


echo
