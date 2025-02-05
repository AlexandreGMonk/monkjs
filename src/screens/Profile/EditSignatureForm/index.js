import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet } from 'react-native';
import { Button, TextInput, Title } from 'react-native-paper';
import PropTypes from 'prop-types';
import noop from 'lodash.noop';

import { BottomSheet } from '@monkvision/ui';
import { utils } from '@monkvision/toolkit';

import Signature from 'components/Signature';

const { spacing } = utils.styles;
const styles = StyleSheet.create({
  card: {
    marginHorizontal: spacing(2),
    marginVertical: spacing(2),
    paddingVertical: spacing(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  signature: {
    width: 300,
    height: 300,
    borderRadius: 4,
  },
  actions: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    margin: spacing(1),
    width: 200,
  },
  textInput: {
    marginVertical: spacing(1),
    backgroundColor: '#FFFFFF',
  },
});

export default function EditSignatureForm({ accountData, handleSave, isOpen, handleClose }) {
  const { firstName, lastName, company, site, updateAccountData } = accountData;
  const [scrollEnabled, setScrollEnabled] = useState(true);

  const signatureRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (isOpen && scrollRef.current) {
      scrollRef.current.scrollTo({ x: 0, y: 0, animated: false });
    }
  }, [isOpen]);

  return (
    <BottomSheet isOpen={isOpen} onClose={handleClose} scrollEnabled={scrollEnabled}>

      <BottomSheet.Title title="Edit account data" />
      <BottomSheet.Content>
        <TextInput style={styles.textInput} label="First name" value={firstName} onChangeText={(val) => updateAccountData({ firstName: val })} />
        <TextInput style={styles.textInput} label="Last name" value={lastName} onChangeText={(val) => updateAccountData({ lastName: val })} />
        <TextInput style={styles.textInput} label="Company" value={company} onChangeText={(val) => updateAccountData({ company: val })} />
        <TextInput style={styles.textInput} label="Site" value={site} onChangeText={(val) => updateAccountData({ site: val })} />
        <Title style={{ marginVertical: spacing(1) }}>
          Edit your signature
        </Title>
        <Signature
          visible
          setScrollEnabled={setScrollEnabled}
          ref={signatureRef}
        />
      </BottomSheet.Content>
      <BottomSheet.Actions style={styles.actions}>
        <Button
          onPress={() => handleSave(signatureRef.current.getUri)}
          mode="outlined"
          style={[styles.button, { alignSelf: 'center' }]}
          icon="content-save"
        >
          Save
        </Button>
      </BottomSheet.Actions>
    </BottomSheet>
  );
}

EditSignatureForm.propTypes = {
  accountData: PropTypes.shape({
    company: PropTypes.string,
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    signature: PropTypes.shape({
      isLoading: PropTypes.bool,
      uri: PropTypes.string,
    }),
    site: PropTypes.string,
    updateAccountData: PropTypes.func,
  }).isRequired,
  handleClose: PropTypes.func,
  handleSave: PropTypes.func.isRequired,
  isOpen: PropTypes.bool,
};
EditSignatureForm.defaultProps = {
  isOpen: false,
  handleClose: noop,
};
