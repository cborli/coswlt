import { shallowMount } from "@vue/test-utils"
import TransactionMetadata from "src/components/transactions/TransactionMetadata"

describe(`TransactionMetadata`, () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallowMount(TransactionMetadata, {
      propsData: {
        transaction: {
          type: "SendTx",
          hash:
            "A0DEB29E97A4DF38289D55D63C5724588985E1D35B26518CB66EAF96CFEF2E04",
          height: 123,
          timestamp: "2020-02-10T10:15:51Z",
          memo: "(Sent via Lunie)",
          success: true,
          fees: [],
          details: {
            from: ["cosmos123"],
            to: ["cosmos456"],
            amount: {
              denom: "ATOM",
              amount: "1"
            }
          }
        }
      },
      stubs: [`router-link`]
    })
  })

  it(`renders correct transaction metadata`, () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})
