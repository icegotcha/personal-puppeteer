import { NowRequest, NowResponse } from '@vercel/node'

export const allowList: { [iat: string]: AllowListItem } = {
  knowlats: {
    publicKey: `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAtYE8hnCiddbDI/x8wnYx
hshLf7mjcFmZbQL/6DK0gRlVuwmDk4VUaD3k4DSmeK5Quer5SeKpBMXQ9sIgPfxd
3x8S0lak41CuH9YSeaIafWhaUdSfR8pFaA4UnpYtFLrWV9aSMbrZbQeSSuO/XLWQ
K1vtrNPTO8dIXBCM7V98Vy3N79wwxx2xcdg69aFdOtba82+G99AuyZWHBTM+DZUC
1KHxMCvK4VngknJdFTXIUJLGB+3cTYk1e3cgO8swoSpxTX6CmXy6qVS0Ciw+473M
MKNZCV2S5FBBLcgo/gs/WHvB4PybnnyoSXdBLO4JGIVnNkJWYon+k8waPikSOhrY
5SSMc1+UTXIJBpAoi8LU9tH+jhq4ioFkZKw0tSmE44A5Lt8ENQyXNPMkMF6qlNhv
jime58xAPk5fGRojUQW8gyV8NivU0aKwB7oJ3uX/J7h6ca5bdFhxaMHWR8Y7fO0O
xFWFf2WnuT6DVUlF/puFw5Hc/+wfEMEMibsL39REqbgKcDhDjpLZYh9J6RsLx8bo
cNNqkPuln6anB7GZZaNq7Y6whP+4sjRNlJ43CNL7YjnQYx9XKQI8yO4kfyP09dPM
Ix08tpQc8/2xT/Rv1k7/GUM0928/4VtuKn9L7a29c2P4nqx5ugquumIlzP/UzNsP
NmsT5ac4rZeesfe2ltWQaL0CAwEAAQ==
-----END PUBLIC KEY-----`,
  },
}

type AllowListItem = {
  publicKey: string
}

export default async function (req: NowRequest, res: NowResponse) {
  res.json(allowList)
}
