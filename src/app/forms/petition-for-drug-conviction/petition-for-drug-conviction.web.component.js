import React from 'react'
import {Scoped} from 'kremling'
import TextInput from '../inputs/text-input.component.js'
import FormThatPrints from '../inputs/form-that-prints.component.js'
import Section from '../inputs/section.component.js'

export default class PetitionForDrugConviction_Web extends React.Component {
  render() {
    return (
      <Scoped css={css}>
        <FormThatPrints>
          <Section name="1. Personal information">
            <TextInput dataKey="person.firstName" label="First name" {...this.props} />
            <TextInput dataKey="person.middleName" label="Middle name" {...this.props} />
            <TextInput dataKey="person.lastName" label="Last name" {...this.props} />
            <TextInput dataKey="person.addressStreet" label="Street" {...this.props} />
            <TextInput dataKey="person.addressCity" label="City" {...this.props} />
            <TextInput dataKey="person.addressState" label="State" {...this.props} />
            <TextInput dataKey="person.addressZip" label="Zip" {...this.props} />
            <TextInput dataKey="person.addressZip" label="Zip" {...this.props} />

            <TextInput dataKey="person.homePhone" label="Home Phone Number" {...this.props} />
            <TextInput dataKey="person.email" label="Email" {...this.props} />
          </Section>
        </FormThatPrints>
      </Scoped>
    )
  }
}

const css = `
`
