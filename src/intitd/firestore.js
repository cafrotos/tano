import { _mockTransGroups } from "configs/mockups"
import transGroupsCollection from "repositories/transGroups"

const initialTransGroups = async () => {
  const { docs } = await transGroupsCollection.get()
  if (docs.length) {
    return
  }

  const bulkCreate = _mockTransGroups.map(transGroup => transGroupsCollection.add(transGroup));
  const resposne = await Promise.all(bulkCreate);

  await initialTransGroupsChildren(resposne)
  console.log("Initial transGroups: Done")
}

const initialTransGroupsChildren = async (transGroupsNoChildren) => {
  const transGroupsWithId = await transGroupsCollection.get()
    .then(_transGroups => {
      const _transGroupsWithId = [];
      _transGroups.forEach(_transGroup => {
        _transGroupsWithId.push({
          id: _transGroup.id,
          ..._transGroup.data()
        })
      })
      return _transGroupsWithId
    })
  const promisesTransGroupsWithChildren = _mockTransGroups
    .map(transGroup => {
      const transGroupWithId = transGroupsWithId.find(_transGroupId => _transGroupId.title === transGroup.title);
      return {
        ...transGroup,
        id: transGroupWithId.id
      }
    })
    .reduce((c, n, i) => {
      if (i === 1) {
        if (c.children && !n.children) {
          return [
            {
              ...c,
              children: [...c.children, n.id]
            }
          ]
        }
        return []
      }
      if (n.children) {
        return [
          ...c,
          n
        ]
      }
      const latest = c.pop();
      return [
        ...c,
        {
          ...latest,
          children: [...latest.children, n.id]
        }
      ]
    })
    .map(transGroup => transGroupsNoChildren
      .find(_transGroup => _transGroup.id === transGroup.id)
      .update({
        children: transGroup.children
      }))
  await Promise.all(promisesTransGroupsWithChildren)
}

// Excute
initialTransGroups();