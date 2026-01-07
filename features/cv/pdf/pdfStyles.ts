import { StyleSheet } from "@react-pdf/renderer";

export const styles = StyleSheet.create({
  page: {
    paddingTop: 32,
    paddingBottom: 32,
    paddingHorizontal: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
    backgroundColor: "#FFFFFF",
    color: "#222222",
  },

  /* =======================
            HEADER 
     ======================= */

  header: {
    marginBottom: 5,
    flexDirection: "row",          
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  headerLeft: {
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center",
    height: "100%",
    flexGrow: "1"
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
  },
  byline: {
    fontSize: 12,
    marginTop: 2,
  },

  /* ===========================
                CONTACT 
     =========================== */

  contactRow: {
    flexDirection: "column",       
    alignItems: "flex-start",        
    marginBottom: 0,
    marginTop: 2,
  },
  contactItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
  },
  contactIconWrapper: {
    minWidth: 12,
    marginRight: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  contactLink: {
    fontSize: 10,
    color: "#1A73E8",
    textDecoration: "none",
    textAlign: "right",
  },
  contactEntry: {
    fontSize: 10,
    color: "#222222",
    textAlign: "right",
  },

  /* ===========================
            SECTIONS
     =========================== */

  sectionContainer: {
    marginTop: 14,
  },
  sectionHeader: {
    borderBottomWidth: 0.5,
    borderBottomColor: "#DDDDDD",
    paddingBottom: 2,
    marginBottom: 4,
  },
  sectionTitle: {
    fontSize: 12,
    fontWeight: "bold",
  },
  bulletRow: {
    flexDirection: "row",
    marginBottom: 3,
  },
  bulletDot: {
    width: 8,
    marginRight: 4,
  },
  bulletDotHidden: {
    width: 0,
    marginRight: 0,
  },
  bulletText: {
    flex: 1,
  },

  /* ===========================
            EXPERIENCE 
     =========================== */

  experienceJob: {
    marginBottom: 6,
  },
  experienceTitleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  experienceTitle: {
    fontSize: 11,
    fontWeight: "bold",
  },
  experienceMeta: {
    fontSize: 10,
    color: "#555555",
  },
});
