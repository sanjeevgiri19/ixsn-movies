export { removeperson } from "../reducers/PersonSlice";
import axios from "../../../utils/axios";
import { loadperson } from "../reducers/PersonSlice";
import { loadtv } from "../reducers/TvSlice";

export const asyncloadperson = (id) => async (dispatch, getState) => {
  try {
    const detail = await axios.get(`/person/${id}`);
    const externalid = await axios.get(`/person/${id}/external_ids`);
    const combinedCredits = await axios.get(`person/${id}/combined_credits`);
    const movieCredits = await axios.get(`person/${id}/movie_credits`);
    const tvCredits = await axios.get(`person/${id}/tv_credits`);
    const images = await axios.get(`person/${id}/images`);

    let ultimateDetails = {
      detail: detail.data,
      externalid: externalid.data,
      combinedCredits: combinedCredits.data,
      movieCredits: movieCredits.data,
      tvCredits: tvCredits.data,
      images: images.data,
    };

    dispatch(loadperson(ultimateDetails));

    // console.log(ultimateDetails.detail.backdrop_path);
  } catch (error) {
    console.log("error", error);
  }
};
