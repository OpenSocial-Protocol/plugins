echo "start remove all @open-social-protocol  osp-js from pacakge-lock.json..."

node -e "let pkg=require('./package-lock.json'); console.log(pkg['packages']['node_modules/@open-social-protocol/osp-api-index-types']);delete pkg['packages']['node_modules/@open-social-protocol/osp-api-index-types']; delete pkg['packages']['node_modules/@open-social-protocol/osp-blockchain-types']; delete pkg['packages']['node_modules/@open-social-protocol/osp-client']; delete pkg['packages']['node_modules/@open-social-protocol/osp-wallet']; delete pkg['packages']['node_modules/@open-social-protocol/osp-wallet']; delete pkg['packages']['node_modules/@open-social-protocol/snapshot-sdk']; require('fs').writeFileSync('package-lock.json', JSON.stringify(pkg, null, 2));"

echo "finish remove all @open-social-protocol osp-js from pacakge-lock.json🎉"
