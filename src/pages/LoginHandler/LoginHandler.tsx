import React, { useCallback, useContext, useEffect, useState } from "react";
import * as Styles from "./LoginHandler.styles";
import { Input } from "ui/components/Input";
import { Checkbox } from "ui/components/Checkbox";
import { Button } from "ui/components/Button";
import { useDispatch, useSelector } from "react-redux";
import commonActions from "store/modules/common/common.actions";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { Loading } from "ui/components/Loading";
import { Tooltip } from "ui/components/Tooltip";
import { SnackbarContext } from "providers/SnackbarProvider/SnackbarProvider";

const errorsDefault = {
	publicKey: '',
	privateKey: '',
};

const LoginHandler = () => {
  const [publicKey, setPublicKey] = useState('');
  const [privateKey, setPrivateKey] = useState('');
  const [acceptCookies, setAcceptCookies] = useState(false);
  const [errors, setErrors] = useState(errorsDefault);

  const publicKeyByCookies = Cookies.get('publicKey');
  const privateKeyByCookies = Cookies.get('privateKey');

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { setDisplaySnackbar } = useContext(SnackbarContext);
  const { loading, status: loginStatus } = useSelector((state: any) => state.common);

  const getTooltipMessage = () => {
    if (!publicKey || !privateKey) {
      return "Fill in the fields correctly";
    }
    return "Accept the cookies to proceed";
  }

  const mountButtonLabel = loading ? <Loading color="defaultLight" /> : "CONFIRM";

  const validateEmptyField = useCallback((field: string) => {
		switch (field) {
		case 'publicKey':
			if (!publicKey.length) {
				setErrors({ ...errors, publicKey: "Fill in this field" });
			} else {
				setErrors({...errors, publicKey: ''});
			}
			break;
    case 'privateKey':
      if (!privateKey.length) {
        setErrors({ ...errors, privateKey: "Fill in this field" });
      } else {
        setErrors({...errors, privateKey: ''});
      }
      break;
		
		default:
		}
	}, [publicKey, privateKey, errors]);

  const handleSetAcceptCookies = (check: boolean) => {
    setAcceptCookies(check);
  };

  const getUserCredentials = useCallback(() => {
    const credentials = {
      publicKey: publicKey,
      privateKey: privateKey,
    };

    dispatch(commonActions.credentials.get(credentials));
  }, [dispatch, publicKey, privateKey]);

  const redirectToLoggedPage = useCallback(() => {
    if (publicKeyByCookies && privateKeyByCookies) {
      navigate('/characters');
    }
  }, [navigate, publicKeyByCookies, privateKeyByCookies]);

  const callSnackbar = useCallback(() => {
    if (loginStatus === 'FAILURE') {
      setDisplaySnackbar({ message: 'Error! Check your credentials', status: 'problem' });
    }
    if (loginStatus === 'SUCCESS') {
      setDisplaySnackbar({ message: 'Success login! Enjoy', status: 'success' });
    }
    dispatch(commonActions.status.reset());
  }, [setDisplaySnackbar, dispatch, loginStatus]);

  useEffect(() => { callSnackbar() }, [callSnackbar])
  useEffect(() => { redirectToLoggedPage() }, [redirectToLoggedPage]);

  return (
    <Styles.Wrapper>
      <Styles.LoginCard>
        <Styles.TitleWrapper>
          <Styles.Title>CREDENTIALS</Styles.Title>
        </Styles.TitleWrapper>
        <Input
          value={publicKey}
          placeholder="Public Key"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPublicKey(e.target.value)}
          onBlur={() => validateEmptyField('publicKey')}
          error={errors.publicKey}
        />
        <Input
          value={privateKey}
          placeholder="Private Key"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrivateKey(e.target.value)}
          onBlur={() => validateEmptyField('privateKey')}
          error={errors.privateKey}
        />
        <Checkbox
          label="Accept Cookies"
          isChecked={acceptCookies}
          onChange={handleSetAcceptCookies}
        />
        <Styles.ButtonWrapper>
          <Tooltip message={getTooltipMessage()} disabled={!!publicKey.length && !!privateKey.length && acceptCookies}>
            <Button
              label={mountButtonLabel}
              onClick={getUserCredentials}
              disabled={!publicKey.length || !privateKey.length || !acceptCookies || loading}
            />
          </Tooltip>
        </Styles.ButtonWrapper>
      </Styles.LoginCard>
    </Styles.Wrapper>
  )
}

export default LoginHandler;
