import * as ImagePicker from "expo-image-picker";

interface IPickImage {
  lunchType?: "CAMERA" | "GALLERY";
  allowsMultipleSelection?: boolean;
  mediaTypeOptions: "All" | "Images" | "Videos";
  cameraTypeOptions?: "Back" | "Front";
  selectionLimit?: number;
}

interface IPickImageResponse {
  url: string;
  type: "image" | "video" | undefined;
  filename: string | null | undefined;
  size: number | undefined;
}

export type TPickImageResult = IPickImageResponse[] | null;

export const pickImageAsync = async ({
  lunchType = "GALLERY",
  allowsMultipleSelection = false,
  mediaTypeOptions = "Images",
  cameraTypeOptions = "Back",
  selectionLimit = 1,
}: IPickImage): Promise<TPickImageResult> => {
  try {
    let mediaType;
    if (mediaTypeOptions == "All") {
      mediaType = ImagePicker.MediaTypeOptions.All;
    } else if (mediaTypeOptions == "Videos") {
      mediaType = ImagePicker.MediaTypeOptions.Videos;
    } else {
      mediaType = ImagePicker.MediaTypeOptions.Images;
    }

    if (lunchType == "CAMERA") {
      let cameraType;

      if (cameraTypeOptions == "Front") {
        cameraType = ImagePicker.CameraType.front;
      } else {
        cameraType = ImagePicker.CameraType.back;
      }
      let result = await ImagePicker.launchCameraAsync({
        allowsEditing: false,
        quality: 0.4,
        allowsMultipleSelection: allowsMultipleSelection,
        mediaTypes: mediaType,
        cameraType: cameraType,
        selectionLimit: selectionLimit,
      });

      if (!result.canceled) {
        const urls = result.assets.map((v) => {
          return {
            url: v.uri,
            type: v.type,
            filename: v.fileName,
            size: v.fileSize,
          };
        });
        return urls;
      } else {
        //alert("You did not select any image.");
        return null;
      }
    } else {
      let result = await ImagePicker.launchImageLibraryAsync({
        allowsEditing: true,
        quality: 1,
        allowsMultipleSelection: allowsMultipleSelection,
        mediaTypes: mediaType,
        selectionLimit: selectionLimit,
      });

      if (!result.canceled) {
        const urls = result.assets.map((v) => {
          return {
            url: v.uri,
            type: v.type,
            filename: v.fileName,
            size: v.fileSize,
          };
        });
        return urls;
      } else {
        //alert("You did not select any image.");
        return null;
      }
    }
  } catch (e) {
    console.log("error=>", e);
    return null;
  }
};
