import React from 'react';
import {
  Container, Content, Text, H1, H2, H3,
} from 'native-base';
import Spacer from './UI/Spacer';

const GanglionView = () => (
  <Container>
    <Content padder>
      <Spacer size={30} />
      <H1>
        Ganglion Data
      </H1>
      <Spacer size={10} />
      <Text>
        Details
        {' '}
      </Text>

      <Spacer size={30} />
      <H2>
        Heading 2
      </H2>
      <Spacer size={10} />
      <Text>
        Details
        {' '}
      </Text>

      <Spacer size={30} />
      <H3>
        Heading 3
      </H3>
      <Spacer size={10} />
      <Text>
        Details
        {' '}
      </Text>
    </Content>
  </Container>
);

export default GanglionView;
