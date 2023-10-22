import PocketBase from 'pocketbase'

const pb = new PocketBase("http://127.0.0.1:8090")

await pb.admins.authWithPassword('test@tääst.com', 'A7CwvE@rtgmpzRFD.TjY')

export default pb;