import { helpers } from "vuelidate/lib/validators";

const ALLOWED_PASSWORD_SYMBOLS = "¡!?¿.,-_#$%&/()\\[\\]{};:@+*";

const PASSWORD_REGEX = new RegExp(
  "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[{symbols}])[A-Za-z\\d{symbols}]{8,}$".replace(
    /{symbols}/g,
    ALLOWED_PASSWORD_SYMBOLS
  )
);

export const alphanumeric = helpers.regex(
  "alphanumeric",
  /^[a-zA-Z0-9ÁÉÍÓÚáéíóúÜüñÑ \-&!?¡¿+.,]{2,}$/
);

export const positiveDigits = helpers.regex("positiveDigits", /^\d*[0-9]\d*$/);

export const email = helpers.regex(
  "email",
  // eslint-disable-next-line no-control-regex
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
);

export const password = helpers.regex("password", PASSWORD_REGEX);

export const name = helpers.regex(
  "name",
  /^[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ -']*[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ ]$/
);

export const paternal = helpers.regex(
  "paternal",
  /^(:?[dD][eE](:? [a-km-zA-KM-ZÁÉÍÓÚáéíóúÜüñÑ]|(:?[lL]| [lL])(:?[aAoO]|[aAoO][sS]|) [a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]+|[lL](:?[aAoO][a-rt-zA-RT-ZÁÉÍÓÚáéíóúÜüñÑ]|[aAoO][sS][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]))(:?[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ -]+[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ ]|)|[dD](:?[a-dA-D]|[f-zF-ZÁÉÍÓÚáéíóúÜüñÑ])[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]|[dD](:?[a-dA-D]|[f-zF-ZÁÉÍÓÚáéíóúÜüñÑ])[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ -]*[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ ]|(:?[a-cA-C]|[e-zE-ZÁÉÍÓÚáéíóúÜüñÑ])[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ -]*[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]|[dD][eE][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ](?:[aAoO][sS][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]|[b-np-zB-NP-ZÁÉÍÓÚáéíóúÜüñÑ])[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]+|[dD][eE] [lL][b-np-zB-NP-ZÁÉÍÓÚáéíóúÜüñÑ][a-rt-zA-RT-ZÁÉÍÓÚáéíóúÜüñÑ-]+[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ ]*|[a-ce-zA-CE-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]+|[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]{2}[a-km-zA-KM-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]*|[yY] [a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]{2}[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]+)$/
);

export const maternal = helpers.regex(
  "maternal",
  /^(:?[dD][eE](:? [a-km-zA-KM-ZÁÉÍÓÚáéíóúÜüñÑ]|(:?[lL]| [lL])(:?[aAoO]|[aAoO][sS]|) [a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]+|[lL](:?[aAoO][a-rt-zA-RT-ZÁÉÍÓÚáéíóúÜüñÑ]|[aAoO][sS][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]))(:?[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ -]+[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ ]|)|[dD](:?[a-dA-D]|[f-zF-ZÁÉÍÓÚáéíóúÜüñÑ])[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]|[dD](:?[a-dA-D]|[f-zF-ZÁÉÍÓÚáéíóúÜüñÑ])[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ -]*[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ ]|(:?[a-cA-C]|[e-zE-ZÁÉÍÓÚáéíóúÜüñÑ])[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ -]*[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]|[dD][eE][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ](?:[aAoO][sS][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]|[b-np-zB-NP-ZÁÉÍÓÚáéíóúÜüñÑ])[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]+|[dD][eE] [lL][b-np-zB-NP-ZÁÉÍÓÚáéíóúÜüñÑ][a-rt-zA-RT-ZÁÉÍÓÚáéíóúÜüñÑ-]+[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ ]*|[a-ce-zA-CE-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]+|[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]{2}[a-km-zA-KM-ZÁÉÍÓÚáéíóúÜüñÑ][a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]*|[yY] [a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]{2}[a-zA-ZÁÉÍÓÚáéíóúÜüñÑ]+|[xX])$/
);

export const taxid = helpers.regex(
  "taxid",
  /^([A-ZÑ&]{3,4})(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01]))(([A-Z\d]{2})([A\d]))?$/
);

export const phone = helpers.regex(
  "phone",
  /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/
);
