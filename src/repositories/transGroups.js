import { COLLECTION_NAMES } from "configs";
import firestore from "services/firebase/firestore"
import { docsDataToArray } from "utils";

const transGroupsCollection = firestore.collection(COLLECTION_NAMES.TRANSGROUPS)

/**
 * 
 * @param {import("repositories").cbQuery} cbQuery 
 */
export const getTransGroupsHierarchy = async (cbQuery) => {
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
    typeof cbQuery === "function" ?
      cbQuery(transGroupsCollection) :
      transGroupsCollection.get()
  );
  return addDisplayProperties(docsDataToArray(transGroupsDocs))
}

export default transGroupsCollection