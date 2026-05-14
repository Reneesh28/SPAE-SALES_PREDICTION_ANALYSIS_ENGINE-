import streamlit as st

st.set_page_config(
    page_title="Demand Forecasting App",
    page_icon="📈",
    layout="wide"
)

# Sidebar Navigation
st.sidebar.success("Select a page above.")

# Page Routing
st.title("📈 Store Item Demand Forecasting App")

st.markdown("""
### Welcome to the Demand Forecasting Dashboard!
Use the sidebar on the left to navigate through the different sections of the application:

1. **📊 EDA Dashboard**: Explore the dataset through various visualizations.
2. **🔮 Single-Day Prediction**: Get a sales prediction for a specific store, item, and date.
3. **📈 Forecasting**: Generate sales forecasts for a range of dates.
4. **📏 Model Evaluation**: View performance metrics and actual vs. predicted plots.

---
**Model**: XGBoost Regressor
""")
