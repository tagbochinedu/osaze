import { useState, useRef } from "react";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [phoneNumberCode, setPhoneNumberCode] = useState();
  //password visibility state
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShown, setPasswordConfirmShown] = useState(false);
  //email validation state
  const [emailIsValid, setEmailIsValid] = useState(true);
  const [emailFocus, setEmailFocus] = useState(false);
  const emailRef = useRef();
  //password validation state
  const [passwordIsValid, setPasswordIsValid] = useState(true);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const passwordRef = useRef();
  // password confirm validation state
  const [passwordConfirmIsValid, setPasswordConfirmIsValid] = useState(true);
  const [passwordConfirmFocus, setPasswordConfirmFocus] = useState(false);
  const passwordConfirmRef = useRef();
  //Refs & State
  const firstNameRef = useRef();
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();
  const countryRef = useRef();
  const stateRef = useRef();
  const cityRef = useRef();
  const houseAddressRef = useRef();
  const [userData, setUserData] = useState({});

  const navigate = useNavigate();

  const codeHandler = (e) => {
    setPhoneNumberCode(e.target.value);
  };
  const EmailValidHandler = () => {
    if (
      emailRef.current.value.trim() !== "" &&
      /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(emailRef.current.value)
    ) {
      alert("email is valid");
      setEmailIsValid(true);
    } else if (emailRef.current.value.trim() !== "") {
      setEmailIsValid(false);
    } else if(emailRef.current.value.trim() ==='') {
      setEmailIsValid(true)
    }
    setEmailFocus(false);
  };

  const passwordValidHandler = () => {
    if (
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(
        passwordRef.current.value
      )
    ) {
      setPasswordIsValid(true);
    } else if (passwordRef.current.value.trim() !== "") {
      setPasswordIsValid(false);
    } else if(passwordRef.current.value.trim() ==='') {
      setPasswordIsValid(true)
    }
    setPasswordFocus(false);
  };

  const passwordConfirmValidHandler = () => {
    if (
      passwordConfirmRef.current.value.trim() !== "" &&
      passwordConfirmRef.current.value === passwordRef.current.value
    ) {
      setPasswordConfirmIsValid(true);
    } else if (passwordConfirmRef.current.value.trim() !== "") {
      setPasswordConfirmIsValid(false);
    } else if(passwordConfirmRef.current.value.trim() ==='') {
      setPasswordConfirmIsValid(true)
    }
    setPasswordConfirmFocus(false);
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    if (emailIsValid && passwordConfirmIsValid && passwordIsValid) {
      try {
        setUserData({
          firstName: firstNameRef.current.value,
          lastName: lastNameRef.current.value,
          eMail: emailRef.current.value,
          phoneNumber: phoneNumberCode + phoneNumberRef.current.value,
          country: countryRef.current.value,
          state: stateRef.current.value,
          city: cityRef.current.value,
          houseAddress: houseAddressRef.current.value,
          password: passwordRef.current.value,
          type: "USER",
        });
        const usersignup = await fetch("", {
          method: "POST",
          body: JSON.stringify(userData),
          headers: { "Content-type": "application/json" },
        });
        const response = await usersignup.json()
        console.log(response)
        navigate("/login");
      } catch {}
    } else if (!emailIsValid) {
      alert("Entered email is invalid. Use the info box to correct this");
    } else if (!passwordConfirmIsValid && passwordIsValid) {
      alert("Passwords do not match");
    } else if (!passwordIsValid) {
      alert("Entered password is invalid. Use the info box to correct this");
    }
  };
  return (
    <div className="w-full">
      <div className="max-w-xs md:max-w-lg border-2 rounded-lg my-20 shadow-lg glass pt-4 pb-8 px-6 shadow-gray-200 mx-auto">
        <h1 className="text-2xl text-center text-header my-6 font-bold font-julius">
          Create Account
        </h1>
        <form onSubmit={submitHandler} autoComplete='off'>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="first_name"
                id="first_name"
                className="block font-merri py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                placeholder=" "
                required
                ref={firstNameRef}
              />
              <label
                htmlFor="first_name"
                className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                First name
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                name="last_name"
                id="last_name"
                className="block py-2.5 px-0 font-merri w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                placeholder=" "
                required
                ref={lastNameRef}
              />
              <label
                htmlFor="floating_last_name"
                className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Last name
              </label>
            </div>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <input
              type="email"
              id="floating_email"
              className={`${"block py-2.5 px-0 font-merri w-full text-md  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"} ${
                !emailFocus && !emailIsValid
                  ? "bg-red-200 text-red-800"
                  : "bg-transparent text-header"
              }`}
              placeholder=" "
              required
              ref={emailRef}
              onBlur={EmailValidHandler}
              onFocus={() => {
                setEmailFocus(true);
              }}
              ari-describedby='emailNote'
            />
                        <p
              id="emailNote"
              className={
                !emailFocus && !emailIsValid
                  ? "border border-gray-400 bg-header text-white text-sm rounded-lg mt-2 px-3 py-2 max-w-max"
                  : "hidden"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-3.5 inline-block mr-1 h-3.5 text-white"
              >
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
              Email should follow the pattern 'abc@ghi.xyz'
            </p>
            <label
              htmlFor="floating_email"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Email address
            </label>
          </div>
          <div className="flex justify-center">
            <select
              onChange={codeHandler}
              className="text-gray-500 focus:text-header min-w-fit focus:outline-0 active:outline-0"
              required
            >
              <option value="">Choose a code</option>
              <option value="213">Algeria (+213)</option>
              <option value="376">Andorra (+376)</option>
              <option value="244">Angola (+244)</option>
              <option value="1264">Anguilla (+1264)</option>
              <option value="1268">Anti&amp;Barb (+1268)</option>
              <option value="54">Argentina (+54)</option>
              <option value="374">Armenia (+374)</option>
              <option value="297">Aruba (+297)</option>
              <option value="61">Australia (+61)</option>
              <option value="43">Austria (+43)</option>
              <option value="994">Azerbaijan (+994)</option>
              <option value="1242">Bahamas (+1242)</option>
              <option value="973">Bahrain (+973)</option>
              <option value="880">Bangladesh (+880)</option>
              <option value="1246">Barbados (+1246)</option>
              <option value="375">Belarus (+375)</option>
              <option value="32">Belgium (+32)</option>
              <option value="501">Belize (+501)</option>
              <option value="229">Benin (+229)</option>
              <option value="1441">Bermuda (+1441)</option>
              <option value="975">Bhutan (+975)</option>
              <option value="591">Bolivia (+591)</option>
              <option value="387">Bosnia (+387)</option>
              <option value="267">Botswana (+267)</option>
              <option value="55">Brazil (+55)</option>
              <option value="673">Brunei (+673)</option>
              <option value="359">Bulgaria (+359)</option>
              <option value="226">Burkina (+226)</option>
              <option value="257">Burundi (+257)</option>
              <option value="855">Cambodia (+855)</option>
              <option value="237">Cameroon (+237)</option>
              <option value="1">Canada (+1)</option>
              <option value="238">Cape Verde (+238)</option>
              <option value="1345">Cayman(+1345)</option>
              <option value="236">CAR (+236)</option>
              <option value="56">Chile (+56)</option>
              <option value="86">China (+86)</option>
              <option value="57">Colombia (+57)</option>
              <option value="269">Comoros (+269)</option>
              <option value="242">Congo (+242)</option>
              <option value="682">Cook Islands (+682)</option>
              <option value="506">Costa Rica (+506)</option>
              <option value="385">Croatia (+385)</option>
              <option value="53">Cuba (+53)</option>
              <option value="90392">Cyprus North (+90392)</option>
              <option value="357">Cyprus South (+357)</option>
              <option value="42">Czech Republic (+42)</option>
              <option value="45">Denmark (+45)</option>
              <option value="253">Djibouti (+253)</option>
              <option value="1809">Dominica (+1809)</option>
              <option value="1809">Dom. Rep (+1809)</option>
              <option value="593">Ecuador (+593)</option>
              <option value="20">Egypt (+20)</option>
              <option value="503">El Salvador (+503)</option>
              <option value="240">Eq. Guinea (+240)</option>
              <option value="291">Eritrea (+291)</option>
              <option value="372">Estonia (+372)</option>
              <option value="251">Ethiopia (+251)</option>
              <option value="500">Falkland (+500)</option>
              <option value="298">Faroe (+298)</option>
              <option value="679">Fiji (+679)</option>
              <option value="358">Finland (+358)</option>
              <option value="33">France (+33)</option>
              <option value="594">Guiana (+594)</option>
              <option value="689">Polynesia (+689)</option>
              <option value="241">Gabon (+241)</option>
              <option value="220">Gambia (+220)</option>
              <option value="7880">Georgia (+7880)</option>
              <option value="49">Germany (+49)</option>
              <option value="233">Ghana (+233)</option>
              <option value="350">Gibraltar (+350)</option>
              <option value="30">Greece (+30)</option>
              <option value="299">Greenland (+299)</option>
              <option value="1473">Grenada (+1473)</option>
              <option value="590">Guadeloupe (+590)</option>
              <option value="671">Guam (+671)</option>
              <option value="502">Guatemala (+502)</option>
              <option value="224">Guinea (+224)</option>
              <option value="245">Guinea-Bissau (+245)</option>
              <option value="592">Guyana (+592)</option>
              <option value="509">Haiti (+509)</option>
              <option value="504">Honduras (+504)</option>
              <option value="852">Hong Kong (+852)</option>
              <option value="36">Hungary (+36)</option>
              <option value="354">Iceland (+354)</option>
              <option value="91">India (+91)</option>
              <option value="62">Indonesia (+62)</option>
              <option value="98">Iran (+98)</option>
              <option value="964">Iraq (+964)</option>
              <option value="353">Ireland (+353)</option>
              <option value="972">Israel (+972)</option>
              <option value="39">Italy (+39)</option>
              <option value="1876">Jamaica (+1876)</option>
              <option value="81">Japan (+81)</option>
              <option value="962">Jordan (+962)</option>
              <option value="7">Kazakhstan (+7)</option>
              <option value="254">Kenya (+254)</option>
              <option value="686">Kiribati (+686)</option>
              <option value="850">N. Korea (+850)</option>
              <option value="82">S. Korea (+82)</option>
              <option value="965">Kuwait (+965)</option>
              <option value="996">Kyrgyzstan (+996)</option>
              <option value="856">Laos (+856)</option>
              <option value="371">Latvia (+371)</option>
              <option value="961">Lebanon (+961)</option>
              <option value="266">Lesotho (+266)</option>
              <option value="231">Liberia (+231)</option>
              <option value="218">Libya (+218)</option>
              <option value="417">Liechtenstein (+417)</option>
              <option value="370">Lithuania (+370)</option>
              <option value="352">Luxembourg (+352)</option>
              <option value="853">Macao (+853)</option>
              <option value="389">Macedonia (+389)</option>
              <option value="261">Madagascar (+261)</option>
              <option value="265">Malawi (+265)</option>
              <option value="60">Malaysia (+60)</option>
              <option value="960">Maldives (+960)</option>
              <option value="223">Mali (+223)</option>
              <option value="356">Malta (+356)</option>
              <option value="692">Marshall (+692)</option>
              <option value="596">Martinique (+596)</option>
              <option value="222">Mauritania (+222)</option>
              <option value="269">Mayotte (+269)</option>
              <option value="52">Mexico (+52)</option>
              <option value="691">Micronesia (+691)</option>
              <option value="373">Moldova (+373)</option>
              <option value="377">Monaco (+377)</option>
              <option value="976">Mongolia (+976)</option>
              <option value="1664">Montserrat (+1664)</option>
              <option value="212">Morocco (+212)</option>
              <option value="258">Mozambique (+258)</option>
              <option value="95">Myanmar (+95)</option>
              <option value="264">Namibia (+264)</option>
              <option value="674">Nauru (+674)</option>
              <option value="977">Nepal (+977)</option>
              <option value="31">Netherlands (+31)</option>
              <option value="687">Caledonia (+687)</option>
              <option value="64">New Zealand (+64)</option>
              <option value="505">Nicaragua (+505)</option>
              <option value="227">Niger (+227)</option>
              <option value="234">Nigeria (+234)</option>
              <option value="683">Niue (+683)</option>
              <option value="672">Norfolk (+672)</option>
              <option value="670">Marianas (+670)</option>
              <option value="47">Norway (+47)</option>
              <option value="968">Oman (+968)</option>
              <option value="680">Palau (+680)</option>
              <option value="507">Panama (+507)</option>
              <option value="675">Papua Guinea (+675)</option>
              <option value="595">Paraguay (+595)</option>
              <option value="51">Peru (+51)</option>
              <option value="63">Philippines (+63)</option>
              <option value="48">Poland (+48)</option>
              <option value="351">Portugal (+351)</option>
              <option value="1787">Puerto Rico (+1787)</option>
              <option value="974">Qatar (+974)</option>
              <option value="262">Reunion (+262)</option>
              <option value="40">Romania (+40)</option>
              <option value="7">Russia (+7)</option>
              <option value="250">Rwanda (+250)</option>
              <option value="378">San Marino (+378)</option>
              <option value="239">Sao Tome (+239)</option>
              <option value="966">Saudi Arabia (+966)</option>
              <option value="221">Senegal (+221)</option>
              <option value="381">Serbia (+381)</option>
              <option value="248">Seychelles (+248)</option>
              <option value="232">Sierra Leone (+232)</option>
              <option value="65">Singapore (+65)</option>
              <option value="421">Slovak Republic (+421)</option>
              <option value="386">Slovenia (+386)</option>
              <option value="677">Solomon Islands (+677)</option>
              <option value="252">Somalia (+252)</option>
              <option value="27">South Africa (+27)</option>
              <option value="34">Spain (+34)</option>
              <option value="94">Sri Lanka (+94)</option>
              <option value="290">St. Helena (+290)</option>
              <option value="1869">St. Kitts (+1869)</option>
              <option value="1758">St. Lucia (+1758)</option>
              <option value="249">Sudan (+249)</option>
              <option value="597">Suriname (+597)</option>
              <option value="268">Swaziland (+268)</option>
              <option value="46">Sweden (+46)</option>
              <option value="41">Switzerland (+41)</option>
              <option value="963">Syria (+963)</option>
              <option value="886">Taiwan (+886)</option>
              <option value="7">Tajikstan (+7)</option>
              <option value="66">Thailand (+66)</option>
              <option value="228">Togo (+228)</option>
              <option value="676">Tonga (+676)</option>
              <option value="1868">Trin&amp;Tobago (+1868)</option>
              <option value="216">Tunisia (+216)</option>
              <option value="90">Turkey (+90)</option>
              <option value="7">Turkmenistan (+7)</option>
              <option value="993">Turkmenistan (+993)</option>
              <option value="1649">Caicos Islands (+1649)</option>
              <option value="688">Tuvalu (+688)</option>
              <option value="256">Uganda (+256)</option>
              <option value="44">UK (+44)</option>
              <option value="380">Ukraine (+380)</option>
              <option value="971">UAE (+971)</option>
              <option value="598">Uruguay (+598)</option>
              <option value="1">USA (+1)</option>
              <option value="7">Uzbekistan (+7)</option>
              <option value="678">Vanuatu (+678)</option>
              <option value="379">Vatican City (+379)</option>
              <option value="58">Venezuela (+58)</option>
              <option value="84">Vietnam (+84)</option>
              <option value="84">Virgin Islands (+1284)</option>
              <option value="84">Virgin Islands (+1340)</option>
              <option value="681">Futuna (+681)</option>
              <option value="969">Yemen (North)(+969)</option>
              <option value="967">Yemen (South)(+967)</option>
              <option value="260">Zambia (+260)</option>
              <option value="263">Zimbabwe (+263)</option>
            </select>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="tel"
                name="floating_phone"
                id="floating_phone"
                className="block py-2.5 px-0 w-full font-merri text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                placeholder=" "
                required
                ref={phoneNumberRef}
              />
              <label
                htmlFor="floating_phone"
                className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Phone number
              </label>
            </div>
          </div>
          <div className="grid md:grid-cols-2 md:gap-6">
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                id="country"
                className="block font-merri py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                placeholder=" "
                required
                ref={countryRef}
              />
              <label
                htmlFor="country"
                className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Country
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                id="state"
                className="block font-merri py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                placeholder=" "
                required
                ref={stateRef}
              />
              <label
                htmlFor="state"
                className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                State/Province
              </label>
            </div>
            <div className="relative z-0 mb-6 w-full group">
              <input
                type="text"
                id="city"
                className="block font-merri py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
                placeholder=" "
                required
                ref={cityRef}
              />
              <label
                htmlFor="city"
                className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                City
              </label>
            </div>
          </div>

          <div className="relative z-0 mb-6 w-full group">
            <input
              type="text"
              id="floating_address"
              className="block font-merri py-2.5 px-0 w-full text-md text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"
              placeholder=" "
              required
              ref={houseAddressRef}
            />
            <label
              htmlFor="floating_address"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              House Address
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <div className="flex relative">
              <input
                type={passwordShown ? "text" : "password"}
                id="floating_password"
                className={`${"block py-2.5 px-0 font-merri w-full text-md  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"} ${
                  !passwordFocus && !passwordIsValid
                    ? "bg-red-200 text-red-800"
                    : "bg-transparent text-header"
                }`}
                placeholder=" "
                required
                onBlur={passwordValidHandler}
                ref={passwordRef}
                onFocus={() => {
                  setPasswordFocus(true);
                }}
                aria-describedby="passwordNote"
              />

              <span
                className="cursor pointer"
                onClick={() => {
                  setPasswordShown(!passwordShown);
                }}
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className={`${"w-6 h-6 text-header absolute right-0 bottom-2"} ${
                    passwordShown ? "hidden" : "block"
                  }`}
                >
                  <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
                </svg>
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className={`${"w-6 h-6 text-header absolute right-0 bottom-2"} ${
                    passwordShown ? "block" : "hidden"
                  }`}
                >
                  <path d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z" />
                </svg>
              </span>
            </div>
            <p
              id="passwordNote"
              className={
                !passwordFocus && !passwordIsValid
                  ? "border border-gray-400 bg-header text-white text-sm rounded-lg mt-2 px-3 py-2 max-w-max"
                  : "hidden"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-3.5 inline-block mr-1 h-3.5 text-white"
              >
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
              8 to 15 characters. <br /> Atleast one uppercase letter.
              <br /> Atleast one lowercase letter.
              <br /> Atleast one digit.
              <br />
              Atleast one special character.
            </p>
            <label
              htmlFor="floating_password"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Password
            </label>
          </div>
          <div className="relative z-0 mb-6 w-full group">
            <div className="flex relative">
              <input
                type={passwordConfirmShown ? "text" : "password"}
                id="floating_confirmpassword"
                className={`${"block py-2.5 px-0 font-merri w-full text-md  border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-header peer"} ${
                  !passwordConfirmFocus &&
                  !passwordConfirmIsValid
                    ? "bg-red-200 text-red-800"
                    : "bg-transparent text-header"
                }`}
                placeholder=" "
                required
                onBlur={passwordConfirmValidHandler}
                ref={passwordConfirmRef}
                onFocus={() => {
                  setPasswordConfirmFocus(true);
                }}
                aria-describedby="passwordConfirmNote"
              />
              <span
                className="cursor pointer"
                onClick={() => {
                  setPasswordConfirmShown(!passwordConfirmShown);
                }}
              >
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className={`${"w-6 h-6 text-header absolute right-0 bottom-2"} ${
                    passwordConfirmShown ? "hidden" : "block"
                  }`}
                >
                  <path d="M279.6 160.4C282.4 160.1 285.2 160 288 160C341 160 384 202.1 384 256C384 309 341 352 288 352C234.1 352 192 309 192 256C192 253.2 192.1 250.4 192.4 247.6C201.7 252.1 212.5 256 224 256C259.3 256 288 227.3 288 192C288 180.5 284.1 169.7 279.6 160.4zM480.6 112.6C527.4 156 558.7 207.1 573.5 243.7C576.8 251.6 576.8 260.4 573.5 268.3C558.7 304 527.4 355.1 480.6 399.4C433.5 443.2 368.8 480 288 480C207.2 480 142.5 443.2 95.42 399.4C48.62 355.1 17.34 304 2.461 268.3C-.8205 260.4-.8205 251.6 2.461 243.7C17.34 207.1 48.62 156 95.42 112.6C142.5 68.84 207.2 32 288 32C368.8 32 433.5 68.84 480.6 112.6V112.6zM288 112C208.5 112 144 176.5 144 256C144 335.5 208.5 400 288 400C367.5 400 432 335.5 432 256C432 176.5 367.5 112 288 112z" />
                </svg>
                <svg
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                  className={`${"w-6 h-6 text-header absolute right-0 bottom-2"} ${
                    passwordConfirmShown ? "block" : "hidden"
                  }`}
                >
                  <path d="M150.7 92.77C195 58.27 251.8 32 320 32C400.8 32 465.5 68.84 512.6 112.6C559.4 156 590.7 207.1 605.5 243.7C608.8 251.6 608.8 260.4 605.5 268.3C592.1 300.6 565.2 346.1 525.6 386.7L630.8 469.1C641.2 477.3 643.1 492.4 634.9 502.8C626.7 513.2 611.6 515.1 601.2 506.9L9.196 42.89C-1.236 34.71-3.065 19.63 5.112 9.196C13.29-1.236 28.37-3.065 38.81 5.112L150.7 92.77zM223.1 149.5L313.4 220.3C317.6 211.8 320 202.2 320 191.1C320 180.5 316.1 169.7 311.6 160.4C314.4 160.1 317.2 159.1 320 159.1C373 159.1 416 202.1 416 255.1C416 269.7 413.1 282.7 407.1 294.5L446.6 324.7C457.7 304.3 464 280.9 464 255.1C464 176.5 399.5 111.1 320 111.1C282.7 111.1 248.6 126.2 223.1 149.5zM320 480C239.2 480 174.5 443.2 127.4 399.4C80.62 355.1 49.34 304 34.46 268.3C31.18 260.4 31.18 251.6 34.46 243.7C44 220.8 60.29 191.2 83.09 161.5L177.4 235.8C176.5 242.4 176 249.1 176 255.1C176 335.5 240.5 400 320 400C338.7 400 356.6 396.4 373 389.9L446.2 447.5C409.9 467.1 367.8 480 320 480H320z" />
                </svg>
              </span>
            </div>
            <p
              id="passwordConfirmNote"
              className={
                !passwordConfirmFocus &&
                !passwordConfirmIsValid &&
                passwordConfirmRef.current.value.trim() !== ""
                  ? "border border-gray-400 bg-header text-white text-sm rounded-lg mt-2 px-3 py-2 max-w-max"
                  : "hidden"
              }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                fill="currentColor"
                className="w-3.5 inline-block mr-1 h-3.5 text-white"
              >
                <path d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z" />
              </svg>
              Passwords do not match
            </p>
            <label
              htmlFor="floating_confirmpassword"
              className="peer-focus:font-medium font-merri absolute text-sm text-gray-500 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-header peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
            >
              Password Confirm
            </label>
          </div>
          <button
            type="submit"
            className="text-white bg-header active:bg-headerHover mx-1 transition ease-in-out duration-150 font-medium rounded-lg text-sm block w-full px-5 py-2.5 text-center"
          >
            Create Account
          </button>
          <div>
            <div className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
              <p className="text-center font-semibold mx-4 mb-0">Or</p>
            </div>

            <div className="text-center flex items-center justify-center">
              <p className="text-md mb-0 mr-4 font-merri text-gray-500 font-medium">
                Sign up with
              </p>

              <button
                id="facebook"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-header text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md active:bg-headerHover mx-1 transition ease-in-out duration-150"
              >
                <svg
                  data-icon="facebook"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                  />
                </svg>
              </button>

              <button
                id="google"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-header text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md active:bg-headerHover mx-1 transition ease-in-out duration-150"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 488 512"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                </svg>
              </button>

              <button
                id="instagram"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block p-3 bg-header text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md active:bg-headerHover hover:shadow-lg transition duration-150 ease-in-out mx-1"
              >
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fab"
                  data-icon="instagram"
                  className="w-4 h-4"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </form>
        <p className="text-gray-500 text-end mt-4">
          Have an account? Sign In{" "}
          <Link to="/login" className="underline text-header">
            here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
