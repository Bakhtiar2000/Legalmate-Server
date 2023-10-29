const { lawyerCollection, userCollection } = require("../collection/collection");

const addLawyer = async (req, res) => {
  const newData = req.body
  try {
    const result = await lawyerCollection(newData).save()
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
const addLawyers = async (req, res) => {
  const newData = req.body
  try {
    const result = await lawyerCollection.insertMany(newData)
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}


const getAllLawyer = async (req, res) => {
  try {
    const result = await lawyerCollection.find();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

const getLawyer = async (req, res) => {
  const id = req.params.id
  try {
    const result = await lawyerCollection.findById(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}
const getLawyerByEmail = async (req, res) => {
  const email = req.params.email
  try {
    const result = await lawyerCollection.findOne({ email: email });
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}

const deleteLawyer = async (req, res) => {
  const id = req.params.id
  try {
    const result = await lawyerCollection.findByIdAndDelete()(id);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json(error);
  }
}


// Update candidate status
const updateAttorneyLicense = async (req, res) => {
  const updateBody = req.body;
};


const updateAttorneyProfile = async (req, res) => {
  const updateBody = req.body;
console.log(updateBody)
  try {
    // Only Status Update
    if (updateBody.email) {
      // only user collection status update
      const updateUserData = await userCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            name: updateBody.name,
          },
        },
        { new: true }
      )
      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            practiceArea: updateBody.practiceArea,
            name: updateBody.name,
            location: updateBody.location,
            hourly_rate: updateBody.hourlyRate,
            about: updateBody.about
          },
        },
        { new: true }
      );

      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};

const updateAttorneyEducation = async (req, res) => {
  const updateBody = req.body;

  try {
    // Only Status Update
    if (updateBody.email) {

      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            education: updateBody.newEducations,
          },
        },
        { new: true }
      );

      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};

const updateAttorneyExperience = async (req, res) => {
  const updateBody = req.body;

  try {
    // Only Status Update
    if (updateBody.email) {

      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            experience: updateBody.newExperience,
          },
        },
        { new: true }
      );

      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};

const updateAttorneyAwards = async (req, res) => {
  const updateBody = req.body;

  try {
    // Only Status Update
    if (updateBody.email) {

      const updateAttorneyData = await lawyerCollection.findOneAndUpdate(
        { email: updateBody.email },
        {
          $set: {
            awards: updateBody.newAwards,
          },
        },
        { new: true }
      );

      // send data client site
      res.status(200).json(updateAttorneyData);
    }
  } catch (error) {
    console.log(error)
    res.status(400).send({ message: 'Server Error' });
  }
};


// Update Attorney Profile
const updateAttorneyProfilePhoto = async (req, res) => {
  const attorneyId = req.params.id;
  const updateData = req.body;
  try {
    // Use findByIdAndUpdate to update the document
    const updatedAttorney = await lawyerCollection.findByIdAndUpdate(
      attorneyId,
      {
        $set: {
          img: updateData.url,
        },
      },
      { new: true }
    );

    const updateUserData = await userCollection.findOneAndUpdate(
      { email: updateData.email },
      {
        $set: {
          img: updateData.url,
        },
      },
      { new: true }
    )
    if (!updatedAttorney) {
      return res.status(404).json({ message: 'Attorney not found' });
    }

    res.status(200).json(updatedAttorney);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


module.exports = { addLawyer, addLawyers, getAllLawyer, getLawyer, getLawyerByEmail, deleteLawyer, updateAttorneyLicense, updateAttorneyProfile ,updateAttorneyEducation ,updateAttorneyExperience,updateAttorneyAwards ,updateAttorneyProfilePhoto
}