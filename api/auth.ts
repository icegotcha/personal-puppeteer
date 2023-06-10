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
}

type AllowListItem = {
  publicKey: string
}

export default async function (req: NowRequest, res: NowResponse) {
  res.json(allowList)
}
