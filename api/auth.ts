import { NowRequest, NowResponse } from '@vercel/node'

export const allowList: { [iat: string]: AllowListItem } = {
  knowlats: {
    publicKey: `-----BEGIN PUBLIC KEY-----
MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEA5BOXWQzvnZk8AcSX4ta1
u4x32nyzVRfeXXVpHrZaFvG2eeqHO0KqMd0FVKT8sYg0E4L2Y9u80U70qQV5eJgf
1UD6JMylFUX2yATyoFpW3A1DOTxxHf4P4Q1ZvWMNrzzLZEgNrE172Kr/KtsX5OW/
NQgAt+rE7FZumOfdWJ3etRvu2YIwWRdEbasv20WfWBCuqqpCARIwP3Dw0mblCkN7
piseGreo2LxEy4vqBzuuZXso/ix0FDX78VQdmTtRUv/ZKd2RHySImZE13QmJC3nl
zqE2nyBbTyo3Bne64zuN0bxpVMM+aidCXGTgM05uprU5jixSbMnh1hecZH+KHeYq
dfzileHr5efgrFsmcB4Z5XfQX7cIXOmPlVdx+o6bCvCJQ9MD4xfNHXMwakBTtG+M
54B7itQNkP/kSWiXsybKXCE3sp4qyHQImIRAKe006fquHIWAEZUba4D/jNNN4QP6
J3Ykc5pW11nGJVb1DXlBy83EC1wUQ9uoUjaULPK3ec/ox4fVwXtbheweG5RmEE5C
jh3EC0ByO3KloS/6rVNr4jX7W8TjCbRe+WKAQm31sQsXwUMf0wBbdk3EmIPgTJ65
bf9MOcneCi6fCV7wSLTBn7yBeNHxUZjM6elFsB7Xjzsa3N8+CRpK73WLjVLxg9YE
FWhM2jLV7uMznt2Q01RCreECAwEAAQ==
-----END PUBLIC KEY-----`,
  },
  'webring.wonderful.software': {
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArCe1g28aEqSrRkucr9/P
uspJog/kFyGYLQJc2m4FjmWAvnpsGrUJYdzqLEodhAFf6Lpi9M15t4t4kN1ko45o
VEN+DOdgHp8c3EO76PeScWmg3Y5KS7JUsRY55cNG4mO/rDGwbCTaSA6L1XLz+hSU
6vefp+y66G5RdS57FnNB9cfsmr2Xc8QxqeSV4ehOkgqEMPc1EYtZnpH1ZLYJa7OP
zdfGM1Q/FbPhdJpEEYnCJGs0P9+Jkz85Vh12z3AP4WEgjD+v0LDgxLgvALRn1iUp
CZEQZ9EZ83YnTxQhCyMd7ZQXKcx1kQFkmUPX7FPEMTfJunH5JHywHCXkGgfA6F7v
4QIDAQAB
-----END PUBLIC KEY-----`,
  },
  'dtinth-webshots': {
    publicKey: `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvgBT7qY48PCtoSILZ9Yq
48ipyguM14bJqazGaZDYzY+FoXsFXfj/6v/FtuWn0gSiEKZ7Cd+9w256JA7rxCdZ
ahe9CDYaaHPdglKSg93ncLaLal6KfNzCEaGvCeaKlt7cDNrNkKGg2chZaHKQbV26
QWzZlSb8xUmNy3AwFd0/H81krCvolRu9zn7UNtXEeDKp7Gmxkr6kWFmWJimt53yg
ogEnr+5IcxnbMKRn84DrxcFjf3NfjZWZ0lZUXMKHPVyW/ZFGC7lhOWNqwbfyun6B
JX/9uRg4s1OysojxEks1k4HL5b55n+wnNSXGY+BUe5sum5o8LoEOq74K74cE1mKA
NwIDAQAB
-----END PUBLIC KEY-----`,
  },
}

type AllowListItem = {
  publicKey: string
}

export default async function (req: NowRequest, res: NowResponse) {
  res.json(allowList)
}
