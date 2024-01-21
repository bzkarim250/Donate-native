import { Dimensions, StyleSheet, Platform } from "react-native";
import COLORS from "../colors/colors";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === "ios" ? 0 : 20,
    flex: 1,
    backgroundColor: COLORS.background,
  },
  scontainer: {
    flex: 1,
    backgroundColor: COLORS.background,
    marginTop: 0,
  },
  search: {
    padding: 10,
    backgroundColor: COLORS.white,
    marginBottom: 15,
    height: 55,
    borderRadius: 8,
    marginLeft: -10,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: height - 60,
    backgroundColor: COLORS.background,
    marginHorizontal: -10,
  },
  imagebg: {
    height: height,
  },
  account: {
    marginVertical: 20,
    marginHorizontal: 30,
    flexDirection: "row",
  },
  inputs: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
  icons: {
    flex: 1,
    height: 50,
    padding: 10,
    marginLeft: 10,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
    elevation: Platform.OS === "ios" ? 0 : 0,
    borderColor: COLORS.main,
    borderWidth: 1,
  },
  sinput: {
    flexDirection: "row",
    width: "100%",
    flex: 1,
  },
  sicon: {
    height: 45,
    padding: 10,
    marginLeft: 10,
    backgroundColor: COLORS.lightGrey,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  cover: {
    color: COLORS.secondary,
    marginHorizontal: 5,
    marginTop: 20,
    textAlign: "right",
    fontSize: 14,
    fontWeight: "600",
  },
  tab: {
    backgroundColor: COLORS.main,
  },
  signup: {
    color: COLORS.secondary,
    marginHorizontal: 5,
    marginTop: 5,
    fontWeight: "bold",
    fontSize: 15,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: COLORS.main,
    borderWidth: 2,
    padding: 1,
  },
  indicator: {
    padding: 12,
    backgroundColor: COLORS.white,
    borderRadius: 12,
  },
  heading: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: COLORS.main,
  },
  submit: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: COLORS.white,
  },
  theading: {
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 10,
    marginHorizontal: "12%",
    marginBottom: 30,
    color: COLORS.main,
  },
  name: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: COLORS.black,
  },
  specs: {
    padding: 10,
    fontStyle: "italic",
    fontSize: 14,
    marginBottom: 10,
    color: COLORS.black,
  },
  price: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
    color: COLORS.main,
  },
  pheading: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 15,
    color: COLORS.main,
    marginTop: 5,
  },
  titles: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: -51,
    color: COLORS.main,
    marginTop: 1,
    marginLeft: 10,
  },
  main: {
    backgroundColor: "#F0F8FF",
    flex: 1,
  },
  mainSection: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
    width: width,
  },
  list: {
    backgroundColor: COLORS.lightGrey,
    paddingHorizontal: 10,
    width: width,
    paddingBottom: 160,
    marginTop: Platform.OS === "ios" ? 20 : 0,
    marginBottom: Platform.OS === "ios" ? 70 : 45,
  },
  mainForm: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 10,
    padding: 10,
    paddingBottom: 15,
    width: width - 20,
    marginLeft: 10,
  },
  detailsForm: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 10,
    padding: 10,
    paddingBottom: 15,
    width: width - 20,
    minHeight: height - 70,
    marginLeft: 10,
  },
  profile: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginTop: "10%",
    marginBottom: 10,
    padding: 10,
    paddingBottom: 15,
    width: "90%",
    marginHorizontal: "5%",
  },
  Cars: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    marginBottom: 5,
    padding: 10,
    flexDirection: "row",
    paddingVertical: 10,
    width: width - 20,
    marginLeft: 10,
  },
  prebooking: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 5,
    marginHorizontal: 10,
  },
  History: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    marginTop: 20,
    marginBottom: 10,
    padding: 10,
    paddingTop: 0,
    paddingBottom: 15,
    width: width - 30,
    marginLeft: 10,
  },
  reference: {
    backgroundColor: COLORS.main,
    borderRadius: 8,
    marginTop: -15,
    padding: 10,
    paddingBottom: 10,
    width: width - 80,
    marginLeft: 20,
    borderColor: COLORS.secondary,
    borderWidth: 2,
    color: COLORS.secondary,
    fontSize: 20,
    fontWeight: "bold",
    paddingVertical: 5,
    textAlign: "center",
    paddingHorizontal: 10,
  },
  status: {
    width: 20,
    height: 20,
    borderRadius: 10,
  },
  additional: {
    marginVertical: 10,
    paddingHorizontal: 10,
    color: COLORS.main,
  },
  specials: {
    marginVertical: 10,
    flexDirection: "row",
    flexWrap: "wrap",
    color: COLORS.main,
  },
  image: {
    width: "45%",
    height: 110,
    borderRadius: 8,
  },
  carimage: {
    width: "100%",
    height: 300,
    borderRadius: 8,
  },
  imageProfile: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    marginTop: 50,
    marginBottom: 30,
    borderColor: COLORS.main,
  },
  label: {
    flexDirection: "row",
    margin: 10,
    flexWrap: "wrap",
    marginLeft: 20,
  },
  profileManager: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  tags: {
    paddingLeft: 15,
    width: "60%",
    flexDirection: "column",
  },
  details: {
    marginTop: 20,
    paddingHorizontal: 10,
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  checkbutton: {
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.main,
    borderWidth: 1,
    borderRadius: 10,
    width: "70%",
  },
  mainbutton: {
    paddingVertical: 10,
    alignItems: "center",
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 10,
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    height: 50,
    backgroundColor: COLORS.secondary,
    borderColor: COLORS.main,
    borderWidth: 1,
    paddingVertical: 10,
    width: "100%",
  },
  button: {
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 50,
    borderRadius: 8,
    elevation: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: COLORS.white,
    marginTop: 30,
    alignSelf: "center",
    width: "100%",
    borderColor: COLORS.main,
    borderWidth: 1,
    backgroundColor: COLORS.main,
    borderRadius: 20,
  },
  section: {
    backgroundColor: COLORS.background,
    paddingHorizontal: 10,
    minHeight: height - 65,
  },
  form: {
    backgroundColor: COLORS.secondary,
    borderRadius: 8,
    paddingVertical: 45,
    paddingHorizontal: 25,
    marginTop: 30,
  },
  mainlogo: {
    width: "70%",
    height: 80,
    marginHorizontal: "12%",
    marginBottom: 10,
    resizeMode: "contain",
  },
  loginForm: {
    borderRadius: 8,
    backgroundColor: COLORS.container,
    paddingVertical: 30,
    paddingHorizontal: 25,
    marginTop: 40,
    marginHorizontal: 10,
  },
  signupForm: {
    borderRadius: 8,
    backgroundColor: COLORS.container,
    paddingVertical: 30,
    paddingHorizontal: 25,
    marginTop: 10,
    marginHorizontal: 10,
  },
  contactForm: {
    borderRadius: 8,
    backgroundColor: COLORS.container,
    paddingVertical: 50,
    paddingHorizontal: 25,
    marginTop: 10,
    marginHorizontal: 10,
  },
  check: {
    borderRadius: 8,
    backgroundColor: COLORS.white,
    paddingVertical: 50,
    paddingHorizontal: 20,
    marginTop: "15%",
    width: "90%",
    marginHorizontal: "5%",
    elevation: 10,
  },
  miniForm: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 10,
    marginTop: 30,
    borderRadius: 8,
    marginHorizontal: 10,
    paddingVertical: 10,
  },
  line: {
    marginBottom: 30,
    borderBottomColor: COLORS.main,
    borderBottomWidth: 1,
  },
  title: {
    color: COLORS.main,
    marginTop: 20,
    fontSize: 32,
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.main,
    marginTop: 40,
    marginBottom: 40,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: 50,
    elevation: Platform.OS === "ios" ? 0 : 10,
    borderColor: Platform.OS === "ios" ? COLORS.main : COLORS.white,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: COLORS.white,
  },
  input_login: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    height: 50,
    elevation: Platform.OS === "ios" ? 0 : 10,
    borderColor: Platform.OS === "ios" ? COLORS.main : COLORS.white,
    borderTopWidth: 1,
    borderRightWidth: 1,
    borderBottomWidth: 1,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: COLORS.white,
  },
  input_search: {
    marginBottom: 1,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: COLORS.lightGrey,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
  },
  dateinput: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    height: Platform.OS === "ios" ? 70 : 45,
    elevation: Platform.OS === "ios" ? 0 : 20,
    borderColor: Platform.OS === "ios" ? COLORS.main : COLORS.white,
    borderWidth: 1,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: COLORS.white,
  },
  variableInput: {
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    elevation: 10,
    borderColor: Platform.OS === "ios" ? COLORS.main : COLORS.white,
    borderWidth: 1,
    minHeight: 50,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: COLORS.white,
  },

  //Donation Posts
  postItem: {
    backgroundColor: COLORS.white,
    borderRadius: 8,
    margin: 10,
    padding: 16,
    elevation: 4,
  },
  postImage: {
    width: "100%",
    height: 200,
    borderRadius: 8,
    marginBottom: 12,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.main,
    marginBottom: 8,
  },
  postDescription: {
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 8,
  },
  postAmount: {
    fontSize: 18,
    color: COLORS.primary,
    marginBottom: 8,
  },
  postDonatedAmount: {
    fontSize: 16,
    color: COLORS.secondary,
  },
  postList: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },

  // Details Styles
  postContainer: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 10,
    margin: 10,
    marginTop: 100,
  },
});

export default styles;