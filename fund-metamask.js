const receiver = "0xbAb124a96877b5dD58435c117073F7B8774306Ad";
const amount = web3.utils.toWei("10", 'ether');

module.exports = async function(callback) {
  const addresses = await web3.eth.getAccounts()

  web3.eth.sendTransaction({
    from: addresses[1],
    to: receiver, 
    value: amount
  }, callback)
}