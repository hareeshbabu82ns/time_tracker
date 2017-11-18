```graphql
query clients{
  clients{
    id
    name
    description
  }
}

mutation createClient{
  createClient(name:"wasted",description:"from refactered"){
    id
    description
    name
  }
}
mutation updClient{
  updateClient(id:"5a04631867e1184348d756c7", name: "bested"){
    id
    name
    description
  }
}
mutation delClient{
  removeClient(id:"5a043e07a5b72a08846e0238")
}
```