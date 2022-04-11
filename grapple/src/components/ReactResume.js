import React, { useEffect } from "react";
// import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { userDataAction } from "../actions/userActions";
import { listAchs } from "../actions/achActions";

// const styles = StyleSheet.create({
//   page: {
//     flexDirection: "row",
//     backgroundColor: "#E4E4E4",
//   },
//   section: {
//     margin: 10,
//     padding: 10,
//     flexGrow: 1,
//   },
// });

const ReactResume = ({ match }) => {
  //   const dispatch = useDispatch();
  //   const userData = useSelector((state) => state.userData);
  //   const { loading, userInfo, error } = userData;
  //   const achList = useSelector((state) => state.achList);
  //   const { loading: loadingAch, achs, error: errorAch } = achList;
  //   const history = useHistory();
  //   useEffect(() => {
  //     dispatch(userDataAction(match.params.id));
  //     dispatch(listAchs());
  //   }, [dispatch, history]);
  //   return (
  //     <Document>
  //       <Page size="A4" style={styles.page}>
  //         <View style={styles.section}>
  //           <h2>
  //             <Text>{userInfo?.fname + " " + userInfo?.lname}</Text>
  //           </h2>
  //         </View>
  //         <View style={styles.section}>
  //           <Text>Section #2</Text>
  //           <Text> {achs[0].achName}</Text>
  //         </View>
  //       </Page>
  //     </Document>
  //   );
};

export default ReactResume;
