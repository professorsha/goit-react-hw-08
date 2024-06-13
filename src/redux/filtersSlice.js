// Слайс фільтра

// У файлі filtersSlice.js оголоси слайс фільтра, використовуючи функцію createSlice().



// Екшени слайса для використання в dispatch:

// changeFilter - зміна значення фільтра в властивості name


// Оголоси функції-селектори для використання в useSelector:

// selectNameFilter - повертає значення фільтра з властивості name.


// З файла слайса експортуй редюсер, а також його екшени і селектори.
import { createSlice } from "@reduxjs/toolkit";

const contactSlice = createSlice({
  name: "filter",
  initialState: { name: "" },
  reducers: {
    changeFilter: (state, action) => ({
      ...state,
      name: action.payload,
    }),
  },
});
export const { changeFilter } = contactSlice.actions;

export default contactSlice.reducer;