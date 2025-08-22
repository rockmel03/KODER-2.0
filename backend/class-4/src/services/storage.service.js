import ImageKit from "imagekit";

var imagekit = new ImageKit({
  publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
  urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT,
});

// {
//   fileId: '68a6eebb5c7cd75eb8ac7555',
//   name: 'my_file_name_X7gvh_UeF.jpg',
//   size: 20866,
//   versionInfo: { id: '68a6eebb5c7cd75eb8ac7555', name: 'Version 1' },
//   filePath: '/my_file_name_X7gvh_UeF.jpg',
//   url: 'https://ik.imagekit.io/rockmel03/my_file_name_X7gvh_UeF.jpg',
//   fileType: 'image',
//   height: 1080,
//   width: 1920,
//   thumbnailUrl: 'https://ik.imagekit.io/rockmel03/tr:n-ik_ml_thumbnail/my_file_name_X7gvh_UeF.jpg',
//   AITags: null,
//   description: null
// }
export const uploadFile = async (file, filename) => {
  try {
    if (!(file && filename))
      throw new Error("file and filename are required to updload to storage");

    const response = await imagekit.upload({
      file,
      fileName: "my_file_name.jpg",

      // checks={`"file.size" < "1mb"`}
    });

    return response;
  } catch (error) {
    throw error;
  }
};

export const deleteFile = async (fileId) => {
  try {
    if (!fileId) throw new Error("fileId is required to delete file");

    const response = await imagekit.deleteFile(fileId);
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};
