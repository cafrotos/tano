import { FirebaseFirestoreTypes } from "@react-native-firebase/firestore";
import { transGroupsCollection } from "services/firebase/firestore"
import { docsDataToArray } from "utils";

/**
 * 
 * @callback cbGetTransGroups
 * @param {typeof transGroupsCollection} transGroupsCollection 
 * @returns {FirebaseFirestoreTypes.QuerySnapshot<FirebaseFirestoreTypes.DocumentData>}
 */

/**
 * 
 * @param {cbGetTransGroups} callback 
 */
export const getTransGroupsHierarchy = async (callback) => {
  /**
   * 
   * @param {Array} _transGroups
   */
  const addDisplayProperties = (_transGroups) => {
    const _transGroupsWithDisplay = [];
    _transGroups.map(_transGroup => {
      if (_transGroupsWithDisplay.find(_value => _value.id === _transGroup.id)) {
        return
      }
      if (_transGroup.children) {
        _transGroupsWithDisplay.push(_transGroup);
        const _transGroupChildren = _transGroups
          .filter(_value => _transGroup.children.includes(_value.id))
          .map(_value => ({
            ..._value,
            isChild: true
          }));
        const _latest = _transGroupChildren.pop();
        _transGroupsWithDisplay.push(
          ..._transGroupChildren,
          {
            ..._latest,
            isLatest: true
          }
        )
      }
    })
    return _transGroupsWithDisplay.filter(_value => _value.title)
  }
  const transGroupsDocs = await (
    typeof callback === "function" ?
      callback(transGroupsCollection) :
      transGroupsCollection.get()
  );
  return addDisplayProperties(docsDataToArray(transGroupsDocs))
}